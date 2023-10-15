function Article({title, date="January 1, 1970", preview, time}) {
    
    let rest = ""
    if (time <= 5) {
        rest = "☕️"
    } else if (time > 5 && time < 30) {
        for (let i = 0; i < Math.floor(time / 5); i++) {
            rest += "☕️"
        }
    } else if (time >= 30) {
        for (let i = 0; i < Math.floor(time / 10); i++) {
            rest += "🍱"
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • <span>{rest} {time} min read</span></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article