function generate_sentence(question, option) {
    const options_mapping = {
        1: "definitely agree with",
        2: "slightly agree with",
        3: "slightly disagree with",
        4: "definitely disagree with"
    };
    return `I ${options_mapping[option]} the statement: '${question}'.`;
}

function generate_paragraph(responses) {
    const options_mapping = {
        1: "definitely agree with",
        2: "slightly agree with",
        3: "slightly disagree with",
        4: "definitely disagree with"
    };
    let paragraph = "Here are your responses:\n\n";
    for (let [question, option] of responses) {
        paragraph += `I ${options_mapping[option]} the statement: '${question}'.\n`;
    }
    return paragraph;
}

function main() {
    const questions = [
        "I feel overwhelmingly sad at times.",
        "I feel guilty about something most of the time.",
        "Have you noticed a decrease in your ability to concentrate or make decisions?",
        "My sleep patterns have been really disrupted.",
        "How often do you find yourself withdrawing from social activities or avoiding interaction with others?"
    ];
    const responses = [];
    for (let i = 0; i < questions.length; i++) {
        console.log(`\nQuestion ${i + 1}: ${questions[i]}`);
        let option = parseInt(prompt("Choose an option: (1: definitely agree, 2: slightly agree, 3: slightly disagree, 4: definitely disagree) "));
        if (![1, 2, 3, 4].includes(option)) {
            console.log("Invalid option. Please choose a number between 1 and 4.");
            return;
        }
        responses.push([questions[i], option]);
    }
    let paragraph = generate_paragraph(responses);
    console.log("\n" + paragraph);
}

main();