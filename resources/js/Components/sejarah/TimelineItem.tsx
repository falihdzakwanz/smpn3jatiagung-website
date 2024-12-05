interface TimelineItemProps {
    title: string;
    content: string;
    image: string;
    align: 'left' | 'right';
}

export default function TimelineItem({
    title,
    content,
    image,
    align,
}: TimelineItemProps) {
    return (
        <div className="relative flex items-start justify-center gap-8">
            {align === 'left' ? (
                <>
                    <div className="w-[45%] text-right">
                        <h3 className="font-libre mb-4 text-2xl text-color-primary">
                            {title}
                        </h3>
                        <img
                            src={image}
                            alt={title}
                            className="inline-block rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="mt-10 h-2 w-2 rounded-full bg-color-primary" />
                    <div className="w-[45%]">
                        <p className="text-justify text-color-primary">
                            {content}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-[45%] text-right">
                        <p className="text-justify text-color-primary">
                            {content}
                        </p>
                    </div>
                    <div className="mt-10 h-2 w-2 rounded-full bg-color-primary" />
                    <div className="w-[45%]">
                        <h3 className="font-libre mb-4 text-2xl text-color-primary">
                            {title}
                        </h3>
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
