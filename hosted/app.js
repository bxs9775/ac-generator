const renderResponse = (response) => {
    $(".ac-text").text(result.msg);
}

const generateDialogue = (e,villagerId) => {
    console.log("generating dialogue")
    e.preventDefault();
    axios.get("/dialogue",{params: {villagerId}} )
        .then(renderResponse);
    return false;
}