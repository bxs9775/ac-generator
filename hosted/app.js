const goToVillager = (e) => {
    id = $("#villager-id").val();
    $("#choose-villager.form").attr("action",`/villager/${id}`);
}