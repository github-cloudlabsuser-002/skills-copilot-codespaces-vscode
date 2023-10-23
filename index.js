import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    function handleMarkdownChange(event) {
        setMarkdown(event.target.value);
    }

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <div dangerouslySetInnerHTML={{ __html: ReactMarkdown.render(markdown) }} />
        </div>
    );
}

export default MarkdownEditor;

// BEGIN: reverse-sentence
function reverseSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const capitalizedWords = reversedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const reversedSentence = capitalizedWords.join(' ');
    return reversedSentence;
}

const sentence = 'the quick brown fox jumps over the lazy dog';
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence); // Output: Dog Lazy The Over Jumps Fox Brown Quick The
// END: reverse-sentence


// BEGIN: map-array-of-arrays
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 },
    ],
];

const names = data.flatMap((array) => array.map((obj) => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']
// END: map-array-of-arrays
