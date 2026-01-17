import { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    rentalId: '',
    equipment: '',
    remarks: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setFormData({
        rentalId: '',
        equipment: '',
        remarks: '',
      });
    }, 3000);
  };

  const recentFeedback = [
    {
      id: 1,
      rentalId: 'RNT-2026-189',
      equipment: 'Rotavator (7 Feet)',
      owner: 'Vijay Singh',
      rating: 5,
      remarks: 'Excellent equipment in great condition. Very satisfied with the rental.',
      date: '12 Jan 2026',
    },
    {
      id: 2,
      rentalId: 'RNT-2025-567',
      equipment: 'Seed Drill Machine',
      owner: 'Prakash Yadav',
      rating: 4,
      remarks: 'Good equipment, worked well for my requirements.',
      date: '07 Jan 2026',
    },
    {
      id: 3,
      rentalId: 'RNT-2025-534',
      equipment: 'Mahindra 575 DI Tractor',
      owner: 'Ramesh Kumar',
      rating: 5,
      remarks: 'Very reliable tractor. Owner was very helpful and responsive.',
      date: '31 Dec 2025',
    },
  ];

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-50 border-2 border-green-600 rounded-sm p-12 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Feedback Submitted Successfully</h3>
          <p className="text-sm text-gray-600">Thank you for your feedback. It helps us improve our services.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Submit Feedback</h2>
        <p className="text-sm text-gray-600 mt-1">Rate your rental experience and provide feedback</p>
      </div>

      {/* Feedback Form */}
      <div className="bg-white border border-gray-300 rounded-sm mb-8">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Feedback Form</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Rental <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.rentalId}
                onChange={(e) => setFormData({ ...formData, rentalId: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a rental</option>
                <option value="RNT-2026-189">RNT-2026-189 - Rotavator (7 Feet)</option>
                <option value="RNT-2025-567">RNT-2025-567 - Seed Drill Machine</option>
                <option value="RNT-2025-534">RNT-2025-534 - Mahindra 575 DI Tractor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Equipment</label>
              <input
                type="text"
                value={formData.equipment}
                onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                placeholder="Auto-filled based on rental"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-sm bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-3 text-sm text-gray-700">
                  {rating === 1 && 'Poor'}
                  {rating === 2 && 'Fair'}
                  {rating === 3 && 'Good'}
                  {rating === 4 && 'Very Good'}
                  {rating === 5 && 'Excellent'}
                </span>
              )}
            </div>
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Remarks (Optional)</label>
            <textarea
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
              rows={5}
              placeholder="Share your experience with the equipment and owner..."
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-sm text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={rating === 0}
              className="px-6 py-2 bg-green-600 text-white rounded-sm text-sm hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>

      {/* Previous Feedback */}
      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Your Previous Feedback</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{feedback.equipment}</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Rental ID: {feedback.rentalId} • Owner: {feedback.owner}
                  </p>
                </div>
                <span className="text-xs text-gray-500">{feedback.date}</span>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-700">
                  ({feedback.rating}/5)
                </span>
              </div>

              {feedback.remarks && (
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200">
                  {feedback.remarks}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recentFeedback.length === 0 && (
          <div className="text-center py-12">
            <Star className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No feedback submitted yet.</p>
            <p className="text-sm text-gray-400 mt-1">Your feedback history will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
