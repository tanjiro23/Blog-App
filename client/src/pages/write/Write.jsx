import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://i.pinimg.com/originals/e9/f2/75/e9f275b0688e53dd5c97031c85d1bcf2.jpg" 
            alt="hello" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your Story..." type="text" className=" writeInput writeText">

                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
