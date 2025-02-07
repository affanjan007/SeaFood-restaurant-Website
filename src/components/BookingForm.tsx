import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface BookingFormProps {
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeError, setTimeError] = useState('');

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  // Define operating hours
  const operatingHours = {
    'Tuesday': { lunch: ['11:30', '15:00'], dinner: ['17:00', '21:30'] },
    'Wednesday': { lunch: ['11:30', '15:00'], dinner: ['17:00', '21:30'] },
    'Thursday': { lunch: ['11:30', '15:00'], dinner: ['17:00', '21:30'] },
    'Friday': { lunch: ['11:30', '15:00'], dinner: ['17:00', '22:30'] },
    'Saturday': { lunch: ['11:30', '15:00'], dinner: ['17:00', '22:30'] },
    'Sunday': { lunch: ['11:30', '16:00'], dinner: ['17:00', '21:30'] }
  };

  const validateTime = (date: string, time: string) => {
    if (!date || !time) return true;

    const selectedDate = new Date(date);
    const currentDate = new Date();
    
    // Reset time parts to compare only dates
    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    // Check if selected date is in the past
    if (selectedDate < currentDate) {
      setTimeError('Please select a future date');
      return false;
    }

    const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Check if it's Monday
    if (dayOfWeek === 'Monday') {
      setTimeError('We are closed on Mondays. Please select another day.');
      return false;
    }

    const hours = operatingHours[dayOfWeek as keyof typeof operatingHours];
    const timeValue = time.replace(':', '');
    
    const isLunchTime = timeValue >= hours.lunch[0].replace(':', '') && 
                       timeValue <= hours.lunch[1].replace(':', '');
    const isDinnerTime = timeValue >= hours.dinner[0].replace(':', '') && 
                        timeValue <= hours.dinner[1].replace(':', '');

    if (!isLunchTime && !isDinnerTime) {
      setTimeError(`For ${dayOfWeek}, we are open ${hours.lunch[0]}-${hours.lunch[1]} for lunch and ${hours.dinner[0]}-${hours.dinner[1]} for dinner`);
      return false;
    }

    // If it's today, check if the selected time hasn't passed
    if (selectedDate.getTime() === currentDate.getTime()) {
      const now = new Date();
      const [hours, minutes] = time.split(':').map(Number);
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);

      if (selectedTime < now) {
        setTimeError('Please select a future time');
        return false;
      }
    }

    setTimeError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateTime(formData.date, formData.time)) {
      return;
    }

    console.log('Form submitted:', formData);
    setShowConfirmation(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'date' || name === 'time') {
      validateTime(
        name === 'date' ? value : formData.date,
        name === 'time' ? value : formData.time
      );
    }
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center animate-scale-in">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Reservation Confirmed!</h2>
            <p className="text-gray-600">
              Thank you for choosing The Shell Bar. We've sent a confirmation email to {formData.email}.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Reservation Details:</h3>
            <p className="text-gray-600">
              {formData.name}<br />
              {new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}<br />
              {formData.time}<br />
              {formData.guests} {parseInt(formData.guests) === 1 ? 'Guest' : 'Guests'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Make a Reservation</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {timeError && (
                  <div className="mt-1 text-sm text-red-600 animate-fade-in">{timeError}</div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={3}
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any dietary requirements or special requests?"
              ></textarea>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;