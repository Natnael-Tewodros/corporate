import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BusinessRedirect = () => {
  const { businessSector } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to homepage
    navigate('/', { replace: true });
    
    // Scroll to businesses section after navigation
    setTimeout(() => {
      const businessesSection = document.getElementById('businesses');
      if (businessesSection) {
        businessesSection.scrollIntoView({ behavior: 'smooth' });
        
        // If a specific business sector is provided, try to scroll to that card
        if (businessSector) {
          setTimeout(() => {
            const businessCard = document.querySelector(`[data-business-id="${businessSector}"]`);
            if (businessCard) {
              businessCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              // Add a highlight effect
              businessCard.classList.add('ring-4', 'ring-blue-500', 'ring-offset-2');
              setTimeout(() => {
                businessCard.classList.remove('ring-4', 'ring-blue-500', 'ring-offset-2');
              }, 2000);
            }
          }, 300);
        }
      }
    }, 100);
  }, [businessSector, navigate]);

  return null; // This component doesn't render anything
};

export default BusinessRedirect;

