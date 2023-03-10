const generateDialogue = async (e,villagerId) => {
    console.log("generating dialogue")
    e.preventDefault();
    var result = await axios.get("/dialogue",{params: {villagerId}} );
    $(".ac-text").text(result.msg);
    return false;
}