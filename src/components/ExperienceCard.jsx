import { useTheme } from "../context/ThemeContext";

export const ExperienceCard = ({ role, company, duration, points }) => {
  const { theme } = useTheme();

  return (
    <div className={`p-5 border rounded-xl shadow-sm hover:shadow-md
      ${theme.qualification_border} ${theme.Qualification_card}`}>

      <h3 className="text-lg font-semibold">{role}</h3>

      <p className="text-sm text-gray-400">
        {company} • {duration}
      </p>

      <ul className="mt-3 list-disc list-inside text-sm space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  );
};