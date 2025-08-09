// Mock API for testing - replace with real backend later
export const mockApi = {
  // Mock video models
  getVideoModels: () => ({
    models: ['veo3', 'sora', 'viral', 'image-to-video'],
    capabilities: {
      veo3: {
        name: 'Google Veo 3',
        capabilities: ['Text-to-video', 'High quality'],
        maxDuration: 10,
        resolutions: ['1920x1080', '1280x720']
      },
      sora: {
        name: 'OpenAI Sora',
        capabilities: ['Text-to-video', 'Advanced AI'],
        maxDuration: 60,
        resolutions: ['1920x1080', '1280x720']
      },
      viral: {
        name: 'Viral Short Generator',
        capabilities: ['Short-form', 'Trending'],
        maxDuration: 15,
        resolutions: ['1080x1920', '720x1280']
      },
      'image-to-video': {
        name: 'Image to Video',
        capabilities: ['Image input', 'Video output'],
        maxDuration: 10,
        resolutions: ['1920x1080']
      }
    }
  }),

  // Mock video generation
  generateVideo: async (endpoint, data) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      id: `video_${Date.now()}`,
      status: 'completed',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      thumbnail: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Generated+Video',
      prompt: data.prompt,
      model: endpoint.includes('veo3') ? 'veo3' : 'sora',
      duration: 10,
      createdAt: new Date().toISOString()
    };
  }
}; 