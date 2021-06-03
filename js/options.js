const tareas = document.getElementById('tareas');
const tareasCompletadas = document.getElementById('tareasCompletadas');

const configSortable = {
    group: {
        name: "lista-tareas"
    },
    animation: 150,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".icon-menu2",
    chosenClass: "active",
    store: {
        set: function(sortable){
            const orden = sortable.toArray();
            localStorage.setItem('lista-tareas', orden.join('|'));
        },
        get: function(sortable){
            const orden = localStorage.getItem('lista-tareas');
            return orden ? orden.split('|') : [];
        }
    }
}

Sortable.create(tareas, configSortable);

Sortable.create(tareasCompletadas, configSortable);