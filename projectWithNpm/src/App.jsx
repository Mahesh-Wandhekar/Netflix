import { Netflix } from "./components/netflix";
import serise from './api/series.json';


export function App(){
  return (
    <div>
        <h2 className="text-info bg-dark">Welcome To My Show</h2>
        <ul>
            {serise.map((data) => (
                <li key={data.id}>
                    <div>
                        <img src={data.img_url} alt={data.name} />
                    </div>
                    <h3>{data.name}</h3>
                </li>
            ))}
        </ul>
    </div>
);
}