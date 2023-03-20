import linkedin from "../imgs/logo-linkedin.png";
import github from "../imgs/logo-github.png";
import codigo from "../imgs/logo-codigo.png";

export default function () {

    return (
        <>
            <div className="bg-[#ECF1F6] flex flex-col py-5 gap-3">
                <div className="flex justify-center gap-4">
                    <a href="https://www.linkedin.com/in/luis-fernando-alvarez-leccia-3a5b7b151/" target="_blank" title="Click para acceder a mi Linkedin" >
                        <img src={linkedin} alt="Img not found" width="40px" className="cursor-pointer" />
                    </a>
                    <a href="https://github.com/fernando8alvarez" target="_blank" title="Click para acceder a mi Github">
                        <img src={github} alt="Img not found" width="40px" className="cursor-pointer" />
                    </a>
                    <a href="#top" title="Click para aceder al Repositorio">
                        <img src={codigo} alt="Img not found" width="40px" className="cursor-pointer" />
                    </a>
                </div>
                <div className="w-full text-center text-[#31353D]">Copyright © | Coded by Luis Fernando Alvarez</div>
            </div>
        </>
    )
}