import Leftside from "../../components/leftside/leftside";
import Rightside from "../../components/rightside/rightside";
const Mco = () => {
    return (
        <div className="mt-32 flex">
            <Leftside />
            <div className="basis-auto grow grid items-center justify-center">
                <h1 className="text-6xl text-red-400">En construction</h1>
                <div className="columns-2">
                    <p>Well, let me tell you something, ...</p>
                    <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
                    <p>Maybe we can live without...</p>
                    <p>Look. If you think this is...</p>
                </div>
            </div>
            <Rightside />
        </div>
    );
};

export default Mco;
