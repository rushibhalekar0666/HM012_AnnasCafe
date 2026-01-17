import { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

export default function AddEquipment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    model: '',
    specifications: '',
    priceType: 'day',
    price: '',
    location: '',
    district: '',
    state: '',
    pincode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        category: '',
        name: '',
        model: '',
        specifications: '',
        priceType: 'day',
        price: '',
        location: '',
        district: '',
        state: '',
        pincode: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-50 border-2 border-green-600 rounded-sm p-12 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipment Added Successfully</h3>
          <p className="text-sm text-gray-600">
            Your equipment has been submitted for verification and will be listed shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Add New Equipment</h2>
        <p className="text-sm text-gray-600 mt-1">Fill in the details to list your agricultural equipment</p>
      </div>

      <div className="bg-white border border-gray-300 rounded-sm">
        <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Equipment Registration Form</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Equipment Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Category <span className="text-red-600">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Category</option>
                <option value="tractor">Tractor</option>
                <option value="tillage">Tillage Equipment</option>
                <option value="seeding">Seeding Equipment</option>
                <option value="planting">Planting Equipment</option>
                <option value="harvesting">Harvesting Equipment</option>
                <option value="spraying">Spraying Equipment</option>
                <option value="threshing">Threshing Equipment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Mahindra 575 DI Tractor"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Model & Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
                placeholder="e.g., 575 DI"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year of Manufacture
              </label>
              <input
                type="text"
                placeholder="e.g., 2020"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Specifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specifications & Description <span className="text-red-600">*</span>
            </label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter detailed specifications, horsepower, condition, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Rental Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rental Price Type <span className="text-red-600">*</span>
              </label>
              <select
                name="priceType"
                value={formData.priceType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="hour">Per Hour</option>
                <option value="day">Per Day</option>
                <option value="week">Per Week</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rental Price (₹) <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Location */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Location Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Village/Town <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Rampur"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  District <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Rampur"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-600">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select State</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">Haryana</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="Bihar">Bihar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 244901"
                  maxLength={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Upload Images */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Equipment Images</h4>
            <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-2">Upload images of your equipment</p>
              <p className="text-xs text-gray-500 mb-4">Supported formats: JPG, PNG (Max 5 images)</p>
              <label className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-sm text-sm hover:bg-gray-50 cursor-pointer">
                Choose Files
                <input type="file" multiple accept="image/*" className="hidden" />
              </label>
            </div>
          </div>

          {/* Availability Calendar Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-sm p-4">
            <p className="text-sm text-blue-900">
              <span className="font-medium">Note:</span> After submission, you can set availability dates from the "My Equipment" section.
            </p>
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
              className="px-6 py-2 bg-green-600 text-white rounded-sm text-sm hover:bg-green-700"
            >
              Submit Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
