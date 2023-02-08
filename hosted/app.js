const generateDialogue = async (e,villagerId) => {
    e.preventDefault();
    var result = await axios.get("/dialogue",{params: {villagerId}} );
    $(".ac-text").text(result.msg);
}