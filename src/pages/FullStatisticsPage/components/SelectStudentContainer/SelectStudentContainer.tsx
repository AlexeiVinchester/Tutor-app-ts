const SelectStudentContainer = ({ onChange, namesOfStudents }: { namesOfStudents: string[], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
        <div className="flex justify-center items-center">
            <select
                className="rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none bg-back-side-statistics text-white border-main-turquoise"
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