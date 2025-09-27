import SeatWatch from "../assets/image/coursesniper.png";
import SonoGest from "../assets/image/sonogest.png";

export const ProjectData = [
    {
        title: "SeatWatch",
        desc: "Gesture-controlled performance tool that manipulates Ableton Live in real time.",
        overview: "SeatWatch is a lightweight automation service that checks Georgia Tech course availability and alerts students the moment a seat opens.\n\n I built it end-to-end—Python + Selenium for reliable checks, running on AWS EC2 for continuous uptime, and Twilio for instant SMS/email notifications—so users could stop manually refreshing and consistently snag spots in high-demand classes.",
        image: SeatWatch,
        demo: "https://drive.google.com/file/d/1Q6R1AORr5QEN7TdSIhrQyzVWZcDPLau9/view?usp=sharing",
        github: "https://github.com/zhiwang24/SeatWatch/blob/main/GetCourse.py",
      },
      {
        title: "Sonogest",
        desc: "Gesture-controlled performance tool using computer vision",
        overview: "Sonogest is an interactive audio-gesture project where my goal was to let users control sound parameters in real time through natural hand movements.\n\nMy role focused on developing the gesture-recognition pipeline and mapping logic, where I applied skills in computer vision, MediaPipe, and WebSockets to connect hand signals with dynamic changes to pitch, reverb, and other effects.\n\nThe result was a responsive prototype that turned simple gestures into a playful, intuitive audio instrument, demonstrating how AI and creative coding can intersect to make music interaction more accessible.",
        image: SonoGest,
        demo: "https://drive.google.com/file/d/1m2_3hj3o1tZFujparirFXSKYIXf9S2X6/view?usp=sharing",
        github: "https://github.com/ayaneyokoya/SonoGest",
      },
]