


export default function AllRaces(){

    const [races, setRace] = useState();
    useEffect(() => {
        fetch(`/api/races`)
        .then((response) => console.log(response))
    }, []);
    return(
        
    )
}