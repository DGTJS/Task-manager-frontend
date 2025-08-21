const TaksItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <div>{task.isCompleted ? "Completa" : "Incompleta"}</div>
        </>
    );
};

export default TaksItem;
