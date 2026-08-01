# frozen_string_literal: true

# Chirpy resolves tab page titles through its locale dictionary. Custom tabs
# are not present in that dictionary, so register their own titles as a safe
# fallback before rendering the site.
Jekyll::Hooks.register :site, :post_read do |site|
  lang = site.config['lang']
  locale = site.data.dig('locales', lang)
  tabs = site.collections['tabs']

  next unless locale && tabs

  locale['tabs'] ||= {}

  tabs.docs.each do |tab|
    title = tab.data['title'].to_s
    locale['tabs'][title.downcase] ||= title unless title.empty?
  end
end

