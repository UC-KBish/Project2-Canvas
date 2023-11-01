function ClassSemesterProgressModule(props) {
    const messages = [
        "This is the start of something amazing. Keep pushing forward.",
        "You've got what it takes to overcome any challenge that comes your way.",
        "Believe in yourself, and you'll be unstoppable.",
        "Small steps lead to big achievements. Keep going!",
        "Every day is a new opportunity to make progress. Seize it!",
        "You are stronger and more resilient than you think.",
        "Don't be afraid to dream big. Your potential is limitless.",
        "It's okay to stumble; just keep getting back up and moving forward.",
        "Success is a journey, not a destination. Enjoy every step.",
        "Your dedication and hard work will pay off. Keep at it.",
        "You're making a difference, even when you don't see it yet.",
        "Embrace challenges as opportunities to grow and learn.",
        "You are a beacon of positivity and inspiration to others.",
        "Your persistence will lead you to great achievements.",
        "You are on the path to success. Keep your focus and determination.",
        "You have the power to turn your dreams into reality.",
        "Celebrate your progress, no matter how small. It all adds up.",
        "Your potential is like a mighty river; it flows endlessly.",
        "Stay committed to your goals, and you'll achieve them.",
        "You've come so far. Keep going, and the future is bright."
    ]

    const weeksLeft = parseInt(props.weeksLeft)
    
    return (
        <div className="ClassSemesterProgressModule-Container Container">
            <h2>{weeksLeft} Week{weeksLeft == 1 ? "" : "s"} Left!</h2>
            <p>{messages[Math.floor(map(weeksLeft, 16, 1, 0, 19))]}</p>
        </div>
    )
}

export default ClassSemesterProgressModule