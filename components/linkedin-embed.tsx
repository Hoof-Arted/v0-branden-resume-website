interface LinkedInEmbedProps {
  articleId: string
  className?: string
}

export function LinkedInEmbed({ articleId, className = "" }: LinkedInEmbedProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-scroll shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${articleId}?collapsed=1`}
        height="240"
        width="100%"
        frameBorder="0"
        allowFullScreen=""
        title={`LinkedIn Post ${articleId}`}
        className="w-full"
      />
    </div>
  )
}
