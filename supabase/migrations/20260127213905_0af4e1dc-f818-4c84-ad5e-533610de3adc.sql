-- Add secondary_images column for product gallery
ALTER TABLE public.products 
ADD COLUMN secondary_images TEXT[] DEFAULT NULL;