
export default function MainContent() {
    return (
        <main className="mainContent">
            <img className="profile " src={require("../images/avatar2.png")} alt="profilepicture" />
            <div className="title">
                <h1 className="title-1">Akintola Tope</h1>
                <h4 className="title-2">Software enginer</h4>
                <div className="email">
                    <img className="email-logo" src={require("../images/MailIcon.png")} alt="Emaillogo" />
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Hello, my name is Foster (Tope Akintola). I am 21 years old and I am currently studying Web Design and Development. I am passionate about this field and it is my goal to become very proficient in this industry. I am currently studying Computer Science. I am hard working, reliable, and self-motivated. I have a MacBook so I can work remotely and deliver all required tasks online. I am currently looking for an entry-level freelance or volunteer position that will help me gain some practical experience and build my portfolio.</p>
            </div>
            <div className="interest">
                <h3>Interest</h3>
                <p>I also have a keen interest in new technologies such as Blockchain, AI, VR/AR, Cloud, Cyber Security,Data science, and Cryptocurrency.</p>
            </div>
        </main>
    )
}