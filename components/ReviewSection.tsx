'use client';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Star } from 'lucide-react';

type ReviewSectionProps = {
  productId: string;
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const { user } = useUser();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmitReview = async () => {
    if (!user) return;
    
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          userId: user.id,
          userName: user.fullName,
          rating,
          comment,
        }),
      });
      
      if (res.ok) {
        setComment('');
        fetchReviews();
      }
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?productId=${productId}`);
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      
      {user && (
        <div className="mb-6 p-4 border rounded-lg">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`cursor-pointer ${
                  star <= rating ? 'fill-yellow-400' : 'fill-gray-200'
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write your review..."
          />
          <button
            onClick={handleSubmitReview}
            className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Submit Review
          </button>
        </div>
      )}

      <div className="space-y-4">
        {reviews.map((review: any) => (
          <div key={review._id} className="border-b pb-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 w-4 h-4" />
                ))}
              </div>
              <span className="font-medium">{review.userName}</span>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
            <span className="text-sm text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}