import React from "react";

const links = [
    { id: 1, content: 'Twitter Link', url: 'https://' },
    { id: 1, content: 'Zuri Team', url: 'https://' },
    { id: 1, content: 'Zuri Books', url: 'https://' },
    { id: 1, content: 'Python Books', url: 'https://' },
    { id: 1, content: 'Background Check for Coders', url: 'https://' },
    { id: 1, content: 'Design Books', url: 'https://' }
]
    
export default function Links () {
    return (
        <ul>
        {links.map(link => <li key={link.id}>{link.content}</li>)}
        </ul>
    )
}