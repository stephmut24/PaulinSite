import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  CodeBracketIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  CodeBracketIcon: <CodeBracketIcon className="h-12 w-12" />,
  BuildingOfficeIcon: <BuildingOfficeIcon className="h-12 w-12" />,
  Cog6ToothIcon: <Cog6ToothIcon className="h-12 w-12" />,
};

export default function CardService({
  title,
  description,
  features,
  icon,
  link,
}) {
  return (
    <Card className="w-full sm:w-[22rem] mx-auto border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <CardBody className="p-0">
        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6 group-hover:bg-red-600 transition-colors duration-300">
          <div className="text-black group-hover:text-white text-2xl">
            {iconMap[icon]}
          </div>
        </div>

        <Typography
          variant="h5"
          className="mb-4 text-black font-bold group-hover:text-red-600 transition-colors duration-300"
        >
          {title}
        </Typography>

        <Typography className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </Typography>
        <ul className="list-none space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
              <Typography
                as="span"
                className="text-sm text-gray-700 leading-snug"
              >
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter className="pt-0">
        <a href={link} className="block">
          <Button
            size="sm"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            En savoir plus
            
             
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
