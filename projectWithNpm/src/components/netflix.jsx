import { serise } from '../api/series.json'; // Assuming serise is correctly imported/exported

export function Netflix() {
    return (
        <div>
            <h2>Welcome To My Show</h2>
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
