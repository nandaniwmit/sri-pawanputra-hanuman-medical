import React, { useState } from 'react';
import { MessageSquare, Phone, Upload, CheckCircle2, ShieldAlert, FileText, CalendarClock } from 'lucide-react';
import { WhatsAppOrderFormData } from '../types';
import { BUSINESS_INFO } from '../data';

export default function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    hasPrescription: false,
    prescriptionFile: null,
    message: '',
    preferredDeliveryTime: 'Anytime (8 AM - 10 PM)'
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFormData(prev => ({
        ...prev,
        prescriptionFile: file
      }));
      
      // Generate a preview if it is an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPrescriptionPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPrescriptionPreview(null); // Clear preview for PDF etc
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      prescriptionFile: null
    }));
    setPrescriptionPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineName || !formData.address) {
      alert('Please fill out all required fields: Name, Phone, Address, and Required Medicines.');
      return;
    }

    // Format WhatsApp text message
    const formattedMessage = `Hello Sri Pawanputra Hanuman Medical,

*PRESCRIPTION / MEDICINE ORDER INQUIRY*
----------------------------------------
*Customer Name:* ${formData.customerName}
*Phone Number:* ${formData.mobileNumber}
*Email:* ${formData.email || 'N/A'}
*Delivery/Store Address:* ${formData.address}
*Medicines Required:* 
${formData.medicineName}

*Has Prescription:* ${formData.hasPrescription ? '✅ YES (Attaching image)' : '❌ NO'}
*Preferred Time:* ${formData.preferredDeliveryTime}
*Note/Special Message:* ${formData.message || 'None'}
----------------------------------------
_Please confirm availability, price, and delivery slot. Thank you!_`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Mark success temporarily, then open link
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <section id="whatsapp-order-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center mb-10">
        <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 rounded-full font-mono uppercase tracking-wider">
          Superfast Delivery Portal
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
          Order Medicines via WhatsApp
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">
          Skip the queue! Share your medicine list or doctor prescription on WhatsApp. We deliver straight to your doorstep in Gaya.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Side Info Panel */}
          <div className="md:col-span-4 bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 fill-white/15" />
                <span className="font-bold tracking-tight text-lg">Instant Support</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                  <p>100% Secure & Private patient medication tracking.</p>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                  <p>Fast packaging. Standard home deliveries completed in 2-4 hours.</p>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                  <p>Digital receipts sent directly back on your mobile.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs">
              <p className="font-semibold text-emerald-200">Emergency Store Contact:</p>
              <a 
                href={BUSINESS_INFO.phoneCallUrl}
                className="flex items-center space-x-2 mt-1.5 text-white font-bold text-base hover:underline"
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <p className="text-[10px] text-emerald-300/80 mt-1">Available during store opening hours.</p>
            </div>
          </div>

          {/* Form Panel */}
          <form id="wa-order-form" onSubmit={handleSubmit} className="md:col-span-8 p-6 sm:p-8 space-y-6">
            
            {isSuccess ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="mx-auto bg-emerald-100 dark:bg-emerald-950/40 p-4 rounded-full w-16 h-16 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Formatting Your Order...</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Opening WhatsApp to send your request. Please hit "Send" in WhatsApp chat!
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="customerName" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      required
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="e.g., Rajesh Kumar"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="mobileNumber" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., 9876543210"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., rajesh@gmail.com"
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Preferred Delivery Time */}
                  <div className="space-y-1">
                    <label htmlFor="preferredDeliveryTime" className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <CalendarClock className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Delivery Time</span>
                    </label>
                    <select
                      id="preferredDeliveryTime"
                      name="preferredDeliveryTime"
                      value={formData.preferredDeliveryTime}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    >
                      <option value="Anytime (8 AM - 10 PM)">Anytime (8 AM - 10 PM)</option>
                      <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                      <option value="Night (8 PM - 10 PM)">Night (8 PM - 10 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Home Address */}
                <div className="space-y-1">
                  <label htmlFor="address" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Delivery Address <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g., House No. 12, Choti Lane, near Kharkhura Devi Temple, Gaya, Bihar 823002"
                    className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* Required Medicines List */}
                <div className="space-y-1">
                  <label htmlFor="medicineName" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Medicines Required <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="medicineName"
                    name="medicineName"
                    required
                    rows={3}
                    value={formData.medicineName}
                    onChange={handleInputChange}
                    placeholder="List your medicines & quantities (e.g.,&#10;1. Dolo 650mg - 2 strips&#10;2. Becosules - 1 strip&#10;3. Alex Syrup - 1 bottle)"
                    className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 font-mono resize-none"
                  />
                </div>

                {/* Prescription Checkbox */}
                <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800/85">
                  <input
                    type="checkbox"
                    id="hasPrescription"
                    name="hasPrescription"
                    checked={formData.hasPrescription}
                    onChange={handleCheckboxChange}
                    className="h-4.5 w-4.5 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded cursor-pointer"
                  />
                  <label htmlFor="hasPrescription" className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 select-none cursor-pointer">
                    <strong>I have a Doctor Prescription.</strong> (Highly recommended for Rx medicines)
                  </label>
                </div>

                {/* Prescription File Upload (Reveals if checkbox active) */}
                {formData.hasPrescription && (
                  <div className="space-y-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                    {!formData.prescriptionFile ? (
                      <div className="space-y-2">
                        <div className="mx-auto bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-full w-10 h-10 flex items-center justify-center text-slate-400">
                          <Upload className="h-5 w-5" />
                        </div>
                        <div>
                          <label htmlFor="prescriptionFile" className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer">
                            Click to select prescription file
                          </label>
                          <p className="text-[10px] text-slate-400 mt-0.5">Supports JPG, PNG or PDF (Max 5MB)</p>
                        </div>
                        <input
                          type="file"
                          id="prescriptionFile"
                          name="prescriptionFile"
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-150 dark:border-slate-800">
                          <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                            <FileText className="h-4 w-4 text-emerald-500" />
                            <span className="font-semibold truncate max-w-[180px]">{formData.prescriptionFile.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-[10px] font-bold text-rose-500 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        
                        {prescriptionPreview && (
                          <div className="mt-3 relative w-32 h-32 mx-auto rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                            <img src={prescriptionPreview} alt="Prescription preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 p-2.5 rounded-lg text-[11px] text-left flex items-start space-x-2">
                      <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Note: WhatsApp does not allow direct file transfers through prefilled URLs. Your form is saved. <strong>Please select and attach this prescription file in your WhatsApp chat once it opens!</strong></span>
                    </div>
                  </div>
                )}

                {/* Additional Note */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Additional Instructions <span className="text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g., Please bring change for ₹500, or call before arriving."
                    className="w-full px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* CTA buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-750 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-600/10 transition-all hover:-translate-y-0.5 duration-200"
                  >
                    <MessageSquare className="h-4 w-4 fill-white/10" />
                    <span>Send Order via WhatsApp</span>
                  </button>
                  
                  <a
                    href={BUSINESS_INFO.phoneCallUrl}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-sm transition-all"
                  >
                    <Phone className="h-4 w-4 text-sky-600" />
                    <span>Call Store Instead</span>
                  </a>
                </div>
              </>
            )}
          </form>

        </div>
      </div>

    </section>
  );
}
