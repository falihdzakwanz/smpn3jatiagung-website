// resources/js/components/sejarah/TimelineItem.tsx
interface TimelineItemProps {
    title: string;
    content: string;
    image: string;
    align: 'left' | 'right';
}

export default function TimelineItem({ title, content, image, align }: TimelineItemProps) {
    return (
        <div className="flex items-start justify-center gap-8 relative">
            {align === 'left' ? (
                <>
                    {/* Left side - Image & Title */}
                    <div className="w-[45%] text-right">
                        <h3 className="font-libre text-2xl text-color-primary mb-4">{title}</h3>
                        <img 
                            src={image} 
                            alt={title} 
                            className="inline-block rounded-lg shadow-xl"
                        />
                    </div>
                    {/* Dot */}
                    <div className="w-2 h-2 bg-color-primary rounded-full mt-10" />
                    {/* Right side - Text */}
                    <div className="w-[45%]">
                        <p className="text-color-primary text-justify">{content}</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Left side - Text */}
                    <div className="w-[45%] text-right">
                        <p className="text-color-primary text-justify">{content}</p>
                    </div>
                    {/* Dot */}
                    <div className="w-2 h-2 bg-color-primary rounded-full mt-10" />
                    {/* Right side - Image & Title */}
                    <div className="w-[45%]">
                        <h3 className="font-libre text-2xl text-color-primary mb-4">{title}</h3>
                        <img 
                            src={image} 
                            alt={title} 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </>
            )}
        </div>
    );
}