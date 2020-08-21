$(function() {
    let todoArray = [
        { done: true, task: "start the exercise" },
        { done: true, task: "take a cofee" },
        { done: false, task: "finish the exercise" },
        { done: false, task: "do the bonus" }
    ];

    for (const item of todoArray) {
        addNewTask(item.done, item.task);
    }

    $("form").on("submit", function(event) {
        event.preventDefault();
        //Get the value of the input
        const addNewItem = $("#addNewItem").val();
        //Add new item to my array
        todoArray.push({ done: false, task: `${addNewItem}` });
        //Call the funtction to create a new item
        addNewTask(false, `${addNewItem}`);
    });

    function addNewTask(itemDone, itemTask) {
        let newTask = $("#list li")
            .eq(0)
            .clone();
        newTask.removeClass("none");
        newTask.find(".listInput").attr("checked", itemDone);
        newTask.find("span").text(itemTask);
        newTask.appendTo("#list");
        if (itemDone == true) {
            newTask.addClass("done");
        }
        newTask.find(".listInput").on("change", function() {
            $(this)
                .parent()
                .toggleClass("done");
        });
    }

    //the end
});