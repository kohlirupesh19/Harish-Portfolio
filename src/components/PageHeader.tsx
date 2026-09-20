import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  category: string;
  title: string;
  description: string;
  breadcrumb: string;
  badge?: string;
}

export function PageHeader({ category, title, description, breadcrumb, badge }: PageHeaderProps) {
  return (
    <div className="bg-[#F4F4F0] border-b border-[#E3E3DC] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#64748B] mb-4">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#0F2942] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#94A3B8]" />
          <span className="font-semibold text-[#0F2942]">{breadcrumb}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                {category}
              </span>
              {badge && (
                <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#0F2942] text-white rounded-xs">
                  {badge}
                </span>
              )}
            </div>
            <h1 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1.5 font-normal tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
