// ==========================================
// 1. NUESTRO MOLDE DE HTML (createTaskHtml)
// ==========================================
function createTaskHtml(id, name, description, prioridad) {
    
    const html = `
        <div>
            <div class="card text-center" data-task-id="${id}">
                <div class="card-header">
                    ${prioridad}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                    
                    
                    <a href="#" class="btn btn-editar">Editar</a>
                    
                    <a href="#" class="btn btn-eliminar delete-button">Eliminar</a>
                    
                    <a href="#" class="btn btn-success btn-completar">Completada</a>
                </div>
                <div class="card-footer text-body-secondary">
                </div>
            </div>
        </div>
    `;
    
    return html; 
}

// ==========================================
// 2. NUESTRA CLASE PRINCIPAL (TaskManager)
// ==========================================
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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










}