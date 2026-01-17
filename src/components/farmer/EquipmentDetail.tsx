import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, DollarSign, Shield, User, Phone, Calendar, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function EquipmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    duration: '1',
  });

  // Mock data - in real app, fetch based on id
  const equipment = {
    id: 1,
    name: 'Mahindra 575 DI Tractor',
    category: 'Tractor',
    model: '575 DI',
    horsepower: '47 HP',
    year: '2020',
    owner: 'Ramesh Kumar Sharma',
    ownerPhone: '+91 98765 43210',
    location: 'Village Rampur, District Rampur, Uttar Pradesh',
    distance: '2.5 km',
    price: '₹800/day',
    pricePerHour: '₹100/hour',
    pricePerWeek: '₹5,000/week',
    availability: 'Available',
    verified: true,
    description: 'Well-maintained Mahindra 575 DI tractor in excellent working condition. Suitable for all types of agricultural operations including plowing, tilling, and transportation. Regular servicing done.',
    specifications: [
      'Engine: 4 Cylinder Diesel',
      'Horsepower: 47 HP',
      'Year: 2020',
      'Condition: Excellent',
      'Hours Used: 850 hours',
      'Implements Available: Trolley, Plough',
    ],
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, submit booking request
    alert('Booking request submitted successfully!');
    navigate('/farmer/requests');
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <button
          onClick={() => navigate('/farmer/search')}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search Results
        </button>
        <h2 className="text-2xl font-semibold text-gray-900">Equipment Details</h2>
        <p className="text-sm text-gray-600 mt-1">Review equipment information and request booking</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Equipment Info Card */}
          <div className="bg-white border border-gray-300 rounded-sm">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded border border-gray-300 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{equipment.name}</h3>
                      <p className="text-sm text-gray-600">{equipment.model} • {equipment.horsepower}</p>
                    </div>
                    {equipment.verified && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-sm">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified Owner</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{equipment.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold text-gray-900">{equipment.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Description</h4>
                <p className="text-sm text-gray-700">{equipment.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Specifications</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {equipment.specifications.map((spec, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="bg-white border border-gray-300 rounded-sm">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Pricing Options</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-sm">
                  <p className="text-sm text-gray-600 mb-1">Per Hour</p>
                  <p className="text-lg font-semibold text-gray-900">{equipment.pricePerHour}</p>
                </div>
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-sm">
                  <p className="text-sm text-gray-600 mb-1">Per Day</p>
                  <p className="text-lg font-semibold text-gray-900">{equipment.price}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-sm">
                  <p className="text-sm text-gray-600 mb-1">Per Week</p>
                  <p className="text-lg font-semibold text-gray-900">{equipment.pricePerWeek}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="bg-white border border-gray-300 rounded-sm">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Availability Calendar</h3>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-900">Equipment is currently available for booking</p>
                <p className="text-xs text-blue-700 mt-1">Check specific dates in the booking form</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Owner Information */}
          <div className="bg-white border border-gray-300 rounded-sm">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Owner Information</h3>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{equipment.owner}</p>
                  {equipment.verified && (
                    <p className="text-xs text-green-700 flex items-center gap-1 mt-1">
                      <Shield className="w-3 h-3" />
                      Verified Owner
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>{equipment.ownerPhone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4" />
                  <span>{equipment.distance} away</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white border border-gray-300 rounded-sm sticky top-6">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Request Booking</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) => setBookingData({ ...bookingData, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="7">1 Week</option>
                  </select>
                </div>

                {/* Cost Summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Cost Summary</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rental (1 day)</span>
                      <span className="text-gray-900">₹800</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-300">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="font-semibold text-gray-900">₹800</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 font-medium"
                >
                  Submit Booking Request
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your request will be sent to the owner for approval
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
