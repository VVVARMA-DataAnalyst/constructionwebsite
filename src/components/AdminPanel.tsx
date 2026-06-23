import React, { useState, useRef } from 'react';
import { X, Upload, Check, AlertCircle } from 'lucide-react';
import type { Project } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose, onAddProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Villas');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [textImageUrl, setTextImageUrl] = useState('');
  const [plotSize, setPlotSize] = useState('');
  const [constructionPeriod, setConstructionPeriod] = useState('');
  const [description, setDescription] = useState('');
  const [materials, setMaterials] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Generate a temporary browser Object URL for preview and rendering
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setTextImageUrl(''); // clear text input if file uploaded
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!title.trim() || !location.trim() || !description.trim()) {
      setErrorMsg('Please fill in all required fields (Title, Location, Description).');
      return;
    }

    // Determine final image source URL
    let finalImageUrl = '';
    if (imagePreview) {
      finalImageUrl = imagePreview;
    } else if (textImageUrl.trim()) {
      finalImageUrl = textImageUrl.trim();
    } else {
      setErrorMsg('Please upload a project photo or enter a valid stock image URL.');
      return;
    }

    // Process materials string into array
    const materialsArray = materials
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    const newProject: Project = {
      id: Date.now(), // Unique numeric timestamp ID
      title: title.trim(),
      category,
      location: location.trim(),
      imageUrl: finalImageUrl,
      plotSize: plotSize.trim() || "Undisclosed plot size",
      constructionPeriod: constructionPeriod.trim() || "TBD",
      description: description.trim(),
      materials: materialsArray.length > 0 ? materialsArray : ["Premium Craftsmanship"]
    };

    onAddProject(newProject);

    // Reset inputs
    setTitle('');
    setCategory('Villas');
    setLocation('');
    setImageFile(null);
    setImagePreview('');
    setTextImageUrl('');
    setPlotSize('');
    setConstructionPeriod('');
    setDescription('');
    setMaterials('');

    onClose();

    // Smooth scroll to portfolio to show the added card
    setTimeout(() => {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Card wrapper */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] animate-fade-up text-left">
        
        {/* Header bar */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-gray-900 leading-tight">Admin Portal</h3>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider block uppercase">Add Built Project Showcase</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close admin modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body Scroll Area */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-gray-700">
          
          {errorMsg && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-100 flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Title & Category inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-400 uppercase tracking-wider">Project Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Rushikonda Beach Villa"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-400 uppercase tracking-wider">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300 cursor-pointer"
              >
                <option value="Villas">Villas</option>
                <option value="Luxury Homes">Luxury Homes</option>
                <option value="Duplex Houses">Duplex Houses</option>
                <option value="Ongoing Projects">Ongoing Projects</option>
              </select>
            </div>
          </div>

          {/* Location input */}
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-400 uppercase tracking-wider">Location *</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Visakhapatnam, AP"
              className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
            />
          </div>

          {/* Specs: Plot Size & Construction Period */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-400 uppercase tracking-wider">Plot Size</label>
              <input
                type="text"
                value={plotSize}
                onChange={(e) => setPlotSize(e.target.value)}
                placeholder="e.g. 5,400 sq ft"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-400 uppercase tracking-wider">Construction Period</label>
              <input
                type="text"
                value={constructionPeriod}
                onChange={(e) => setConstructionPeriod(e.target.value)}
                placeholder="e.g. 12 Months"
                className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Photo upload / URL input */}
          <div className="space-y-2 border border-gray-100 rounded-xl p-4 bg-gray-50/50">
            <label className="block font-bold text-gray-400 uppercase tracking-wider mb-1">Project Photo *</label>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* File upload button */}
              <div className="w-full sm:w-1/2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-dashed border-gray-300 hover:border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center gap-1.5 bg-white transition-all cursor-pointer"
                >
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-700 text-xs">Upload Photo File</span>
                  <span className="text-[9px] text-gray-400 font-light">JPG, PNG or WEBP</span>
                </button>
              </div>

              {/* URL fallback */}
              <div className="w-full sm:w-1/2 space-y-1 text-center">
                <span className="text-[10px] text-gray-400 font-bold block mb-1">— OR PASTE URL —</span>
                <input
                  type="text"
                  value={textImageUrl}
                  onChange={(e) => {
                    setTextImageUrl(e.target.value);
                    setImageFile(null);
                    setImagePreview(''); // clear upload if URL entered
                  }}
                  placeholder="https://images.unsplash.com/photo..."
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Preview frame */}
            {imagePreview && (
              <div className="mt-3 flex items-center gap-3 bg-[#28c840]/5 border border-[#28c840]/10 rounded-lg p-2.5">
                <div className="w-12 h-12 rounded overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                  <img src={imagePreview} alt="upload preview" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <span className="text-gray-800 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#28c840]" />
                    <span>File Selected</span>
                  </span>
                  <span className="text-[9px] text-gray-400 truncate block max-w-[200px]">{imageFile?.name}</span>
                </div>
              </div>
            )}
          </div>

          {/* Description Textarea */}
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-400 uppercase tracking-wider">Project Story / Description *</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the architectural layouts, structural challenges solved, or customization achievements..."
              className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300 resize-y"
            />
          </div>

          {/* Materials Tag list */}
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-400 uppercase tracking-wider">Materials Used (comma-separated)</label>
            <input
              type="text"
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
              placeholder="e.g. Cured Concrete, Structural Steel, Calacatta Marble"
              className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
            />
          </div>

        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-gray-500 hover:text-gray-800 px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors focus:outline-none"
          >
            Add Project Showcase
          </button>
        </div>

      </div>
    </div>
  );
};
