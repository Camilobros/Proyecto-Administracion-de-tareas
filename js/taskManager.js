// ==========================================
// 1.MOLDE DE HTML (createTaskHtml)
// ==========================================
function createTaskHtml(id, name, description, prioridad, status) {

    const fondoClase = (status === 'HECHO') ? 'bg-success-subtle' : '';
    const textoBoton = (status === 'HECHO') ? 'Pendiente' : 'Completada';
    const claseBoton = (status === 'HECHO') ? 'btn-warning' : 'btn-success';
    
    const html = `
        <div>
            <div class="card text-center ${fondoClase}" data-task-id="${id}">
                <div class="card-header">
                    ${prioridad}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                    
                    
                    <a href="#" class="btn btn-editar">Editar</a>
                    
                    <a href="#" class="btn btn-eliminar delete-button">Eliminar</a>
                    
                    <a href="#" class="btn ${claseBoton} btn-completar">${textoBoton}</a>
                </div>
                <div class="card-footer text-body-secondary">
                </div>
            </div>
        </div>
    `;
    
    return html; 
}

// ==========================================
// 2.CLASE PRINCIPAL (TaskManager)
// ==========================================
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }



    toggleTaskStatus(taskId) {
        
        for (let task of this.tasks) {
            if (task.id === taskId) {
                
                if (task.status === 'PORHACER') {
                    task.status = 'HECHO';
                } else {
                    task.status = 'PORHACER';
                }
            }
        }
    }

    
    addTask(name, description, dueDate, prioridad) {
        this.currentId++;

        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            dueDate: dueDate,
            prioridad: prioridad, 
            status: 'PORHACER' 
        });
    }

    deleteTask(taskId) { 
        
        const newTasks = []; 

        
        for (let task of this.tasks) { 
            
            
            if (task.id !== taskId) { 
            
                newTasks.push(task); 
            } 
        } 
        
        
        this.tasks = newTasks; 
    }



    render() {

        const porHacerList = [];
        const hechoList = [];
            
        for (let task of this.tasks) {
            
            
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.prioridad, task.status);
            
            
            if (task.status === 'PORHACER') {
                porHacerList.push(taskHtml);
            } else if (task.status === 'HECHO') {
                hechoList.push(taskHtml);
            }
        }
        
        
        const listaPorHacer = document.querySelector('#lista-por-hacer');
        listaPorHacer.innerHTML = porHacerList.join('\n');

        
        const listaHecho = document.querySelector('#lista-hecho');
        listaHecho.innerHTML = hechoList.join('\n');
    }


    
    save() {
        
        const tasksJson = JSON.stringify(this.tasks);
        
        
        localStorage.setItem('tareasGuardadas', tasksJson);

        
        const currentIdTexto = String(this.currentId);
        
        
        localStorage.setItem('idGuardado', currentIdTexto);
    }
    

    load() {
        
        if (localStorage.getItem('tareasGuardadas')) {
            
            
            const tasksJson = localStorage.getItem('tareasGuardadas');
            
            
            this.tasks = JSON.parse(tasksJson);
        }

        
        if (localStorage.getItem('idGuardado')) {
            
            
            const currentIdTexto = localStorage.getItem('idGuardado');
            
            
            this.currentId = Number(currentIdTexto);
        }
    }









}