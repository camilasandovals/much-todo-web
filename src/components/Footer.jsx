import { GithubOutlined } from "@ant-design/icons"
export default function Footer() {
    const githubUrl = "https://github.com/milasandovals/"
    const currentDate = new Date().getFullYear()
    return (
        <footer>
            <small>
            &copy; {currentDate} - Camila Sandoval 
            </small>
            <div>
            <a href = {githubUrl}
            target = "_blank"
            rel = "noreferrer"> 
            <GithubOutlined style={{ color: 'black' }}/>
            </a>
            </div>
            
        </footer>
    )
}