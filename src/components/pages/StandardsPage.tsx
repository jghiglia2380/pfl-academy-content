import { useNavigate } from "react-router-dom";
import { standards } from "../../data/standards";
import { StandardCard } from "../StandardCard";
import { Footer } from "../Footer";

export function StandardsPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Financial Literacy Standards
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Master essential financial concepts through our comprehensive
          curriculum
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standards.map((standard) => (
          <StandardCard
            key={standard.id}
            standard={standard}
            onClick={() =>
              navigate(
                `/standards/${standard.id}/chapters/${standard.chapters[0].id}`
              )
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
