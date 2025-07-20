import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong> {website}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Company:</strong> {company.name}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Address:</strong> {address.suite}, {address.street},{" "}
        {address.city}
      </p>
    </div>
  );
};

export default UserCard;
