import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">영어 단어장 만들기</Link>
            </h1>

            <div className="menu">
                <Link to="/create_word">단어 추가</Link>
                <Link to="/create_day">   Day 추가</Link>
            </div>
        </div>
    );
}