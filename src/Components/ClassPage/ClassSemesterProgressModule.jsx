import React, { useState, useEffect } from 'react';

function ClassSemesterProgressModule() {
    const [currentWeek, setCurrentWeek] = useState(0);
    const startDate = new Date('2023-08-21'); //sem start date
    const endDate = new Date('2023-12-09'); //sem end date
  
    useEffect(() => {
      const startOfWeek = new Date(startDate);
      const endOfWeek = new Date(endDate);
  
      const totalWeeks = Math.ceil((endOfWeek - startOfWeek) / (7 * 24 * 60 * 60 * 1000)); //calculate ms in a week
  
      const now = new Date();
      const diffInTime = now.getTime() - startOfWeek.getTime();
      const diffInWeeks = Math.floor(diffInTime / (1000 * 3600 * 24 * 7));
  
      if (diffInWeeks < 0) {
        setCurrentWeek(0);
      } else if (diffInWeeks > totalWeeks) {
        setCurrentWeek(totalWeeks);
      } else {
        setCurrentWeek(diffInWeeks + 1);
      }
    }, [startDate, endDate]);
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

    const weeksLeft = 17 - currentWeek
    
    return (
        <div className="ClassSemesterProgressModule-Container ClassPage-Container">
            <h2>{weeksLeft} Week{weeksLeft == 1 ? "" : "s"} Left!</h2>
            <p>{messages[Math.floor(map(weeksLeft, 16, 1, 0, 19))]}</p>
        </div>
    )
}

export default ClassSemesterProgressModule