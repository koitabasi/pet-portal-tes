import React from 'react';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    isVideoStyle?: boolean;
    icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    id,
    title,
    description,
    imageUrl,
    isVideoStyle = false,
    icon,
}) => {
    return (
        <div
            id={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
        >
            {/* Image Container */}
            <div className={`relative ${isVideoStyle ? 'aspect-video' : 'h-48'} bg-gray-100 overflow-hidden`}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {isVideoStyle && icon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 shadow-lg">
                            {icon}
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
