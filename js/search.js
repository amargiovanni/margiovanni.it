// Search functionality with FAB
(function() {
  const searchFab = document.getElementById('searchFab');
  const searchClose = document.getElementById('searchClose');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('search-input');

  // Open search overlay
  function openSearch() {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 300);
  }

  // Close search overlay
  function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    document.getElementById('results-container').innerHTML = '';
  }

  // Event listeners
  if (searchFab) {
    searchFab.addEventListener('click', openSearch);
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  // Close on overlay background click
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Initialize Simple-Jekyll-Search
  if (typeof SimpleJekyllSearch !== 'undefined') {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json',
      searchResultTemplate: '<article class="search-result"><h3 class="search-result-title"><a href="{url}">{title}</a></h3><p class="search-result-subtitle">{subtitle}</p><div class="search-result-meta"><span class="search-result-date">{date}</span><span class="search-result-categories">{categories}</span></div></article>',
      noResultsText: '<div class="no-results">No posts found</div>',
      limit: 20,
      fuzzy: false
    });
  }
})();
