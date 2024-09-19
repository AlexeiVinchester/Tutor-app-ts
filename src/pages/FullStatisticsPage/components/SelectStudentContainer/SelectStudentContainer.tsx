const SelectStudentContainer = ({onChange, namesOfStudents}: {namesOfStudents: string[], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
    return (
        <div>
            <select
                defaultValue={namesOfStudents[0]}
                onChange={onChange}
            >
                {
                    namesOfStudents.map((name) => (
                        <option key={name}>
                            {name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export { SelectStudentContainer }; 
