export function Header({personalInfo}) {
  const headerStyle = "bg-gradient-to-r from-blue-700 to-blue-900 p-9 h-fit";
  const headerGrid = "col-start-1 col-end-4"

  return (
    <div className={`${headerStyle} ${headerGrid}`}>
      <h2 className="text-5xl font-bold mt-2 mb-2">{personalInfo.firstName} {personalInfo.lastName}</h2>
      <h3 className="text-xl">{personalInfo.title}</h3>
    </div>
  );
}
