import { useState } from "react";

const RandomSentences = () => {

    const sentences = [
        'Do you love ReactJs?',
        'JavaScript is the Best',
        'Have a nice DAY',
        'Free Palestine',
        'You can do a lot of funny by JavaScript',
        'React is Framework',
        'BootStrap is Laibrary from CSS',
        'React made by Facebook',
        '(FullStack) coming soon',
        'The Program is funny',
        'Enjoy your time!'
    ];

    const [text, setText] = useState(sentences[Math.floor(Math.random() * sentences.length)]);

    const changeSentence = () => {
        setText(sentences[Math.floor(Math.random() * sentences.length)])
    };

    return (
        <div>
            <p className='sentence' onClick={changeSentence}>
                <span className="left">Ex.3</span>
                {text}
            </p>
        </div>
    )
}

export default RandomSentences
