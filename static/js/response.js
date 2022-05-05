function getBotResponse(input) {
    // Variable of to help in executing input
    var dub = input;
    const temp = input.split('');
    let QM = temp[temp.length - 1];

    // Simple responses
    if (input == "hello" || input == "Hello" || input == "Hi" || input == "hi"){
        return "Yea..";
    }
    else if (QM == '?' && input == dub.toUpperCase()) {
        return "Calm down, I know what I'm doing!";
    } 
    else if (QM == '?') {
        return "Sure.";
    } 
    else if (input == "") {
        return "Fine. Be that way!";
    } 
    else if (input == dub.toUpperCase() && input == dub.replace(/[^a-zA-Z ]/g, "")) {
        return "Whoa, chill out!";
    }
    else {
        return "Whatever";
    }
}