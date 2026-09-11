export type Resource = {
  title: string;
  url: string;
  kind: "video" | "course" | "docs" | "book" | "article";
};

export type Root = {
  id: string;
  title: string;
  color: string;
};

export type Topic = {
  id: string;
  rootId: string;
  title: string;
  description: string;
  resources: Resource[];
};

export const roots: Root[] = [
  { id: "foundations", title: "Math & Statistics", color: "#5EEAD4" },
  { id: "tooling", title: "Programming & Tools", color: "#FCD34D" },
  { id: "core", title: "Core Machine Learning", color: "#86EFAC" },
  { id: "deep", title: "Deep Learning", color: "#F472B6" },
  { id: "applied", title: "Applied & Specializations", color: "#FB923C" },
];

export const topics: Topic[] = [
  // ---- Math & Statistics ----
  {
    id: "linear-algebra",
    rootId: "foundations",
    title: "Linear Algebra",
    description:
      "Vectors, matrices, eigenvalues — the language every ML model's internals are written in.",
    resources: [
      { title: "3Blue1Brown — Essence of Linear Algebra", url: "https://www.3blue1brown.com/topics/linear-algebra", kind: "video" },
      { title: "MIT 18.06 Linear Algebra (OCW)", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", kind: "course" },
    ],
  },
  {
    id: "calculus",
    rootId: "foundations",
    title: "Calculus & Multivariable Calculus",
    description:
      "Derivatives and gradients underpin how models learn from data via optimization.",
    resources: [
      { title: "3Blue1Brown — Essence of Calculus", url: "https://www.3blue1brown.com/topics/calculus", kind: "video" },
      { title: "Khan Academy — Multivariable Calculus", url: "https://www.khanacademy.org/math/multivariable-calculus", kind: "course" },
    ],
  },
  {
    id: "probability",
    rootId: "foundations",
    title: "Probability Theory",
    description:
      "Distributions, expectation, and conditional probability — the basis for how models reason under uncertainty.",
    resources: [
      { title: "Harvard Stat 110", url: "https://projects.iq.harvard.edu/stat110", kind: "course" },
      { title: "Khan Academy — Probability", url: "https://www.khanacademy.org/math/statistics-probability", kind: "course" },
    ],
  },
  {
    id: "statistics",
    rootId: "foundations",
    title: "Statistics & Hypothesis Testing",
    description:
      "Estimation, bias/variance, and significance testing — how to trust (or doubt) what your data is telling you.",
    resources: [
      { title: "StatQuest with Josh Starmer", url: "https://www.youtube.com/@statquest", kind: "video" },
      { title: "Khan Academy — Statistics", url: "https://www.khanacademy.org/math/statistics-probability", kind: "course" },
    ],
  },
  {
    id: "optimization",
    rootId: "foundations",
    title: "Optimization & Gradient Descent",
    description:
      "How models actually improve: loss surfaces, gradient descent, and convex optimization basics.",
    resources: [
      { title: "Boyd & Vandenberghe — Convex Optimization (free book)", url: "https://web.stanford.edu/~boyd/cvxbook/", kind: "book" },
      { title: "StatQuest — Gradient Descent", url: "https://www.youtube.com/watch?v=sDv4f4s2SB8", kind: "video" },
    ],
  },

  // ---- Programming & Tools ----
  {
    id: "python",
    rootId: "tooling",
    title: "Python for Data Science",
    description: "The working language of ML — syntax, functions, and the standard library basics you'll use daily.",
    resources: [
      { title: "The Python Tutorial (official docs)", url: "https://docs.python.org/3/tutorial/", kind: "docs" },
    ],
  },
  {
    id: "numpy-pandas",
    rootId: "tooling",
    title: "NumPy & Pandas",
    description: "Array computation and tabular data wrangling — how ML data actually gets loaded, cleaned, and shaped.",
    resources: [
      { title: "NumPy — Absolute Beginners Guide", url: "https://numpy.org/doc/stable/user/absolute_beginners.html", kind: "docs" },
      { title: "Pandas — Getting Started", url: "https://pandas.pydata.org/docs/getting_started/index.html", kind: "docs" },
    ],
  },
  {
    id: "dataviz",
    rootId: "tooling",
    title: "Data Visualization",
    description: "Plotting distributions and relationships to understand your data before you model it.",
    resources: [
      { title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html", kind: "docs" },
      { title: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html", kind: "docs" },
    ],
  },
  {
    id: "git",
    rootId: "tooling",
    title: "Git & Version Control",
    description: "Tracking changes and collaborating on code and experiments without overwriting each other's work.",
    resources: [
      { title: "Git Documentation", url: "https://git-scm.com/doc", kind: "docs" },
      { title: "GitHub Skills", url: "https://skills.github.com/", kind: "course" },
    ],
  },
  {
    id: "sklearn",
    rootId: "tooling",
    title: "Scikit-learn",
    description: "The standard toolkit for classical ML in Python — consistent APIs for models, metrics, and pipelines.",
    resources: [
      { title: "scikit-learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", kind: "docs" },
    ],
  },

  // ---- Core Machine Learning ----
  {
    id: "regression",
    rootId: "core",
    title: "Supervised Learning: Regression",
    description: "Predicting continuous values — linear regression through to regularized models.",
    resources: [
      { title: "Machine Learning Specialization (DeepLearning.AI)", url: "https://www.deeplearning.ai/courses/machine-learning-specialization/", kind: "course" },
      { title: "StatQuest — Linear Regression", url: "https://www.youtube.com/watch?v=nk2CQITm_eo", kind: "video" },
    ],
  },
  {
    id: "classification",
    rootId: "core",
    title: "Supervised Learning: Classification",
    description: "Predicting categories — logistic regression, decision trees, and nearest neighbors.",
    resources: [
      { title: "scikit-learn — Supervised Learning", url: "https://scikit-learn.org/stable/supervised_learning.html", kind: "docs" },
      { title: "StatQuest — Logistic Regression", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8", kind: "video" },
    ],
  },
  {
    id: "clustering",
    rootId: "core",
    title: "Unsupervised Learning: Clustering",
    description: "Finding structure without labels — k-means, hierarchical clustering, and DBSCAN.",
    resources: [
      { title: "scikit-learn — Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html", kind: "docs" },
    ],
  },
  {
    id: "pca",
    rootId: "core",
    title: "Dimensionality Reduction (PCA)",
    description: "Compressing high-dimensional data down to the directions that actually matter.",
    resources: [
      { title: "StatQuest — PCA", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ", kind: "video" },
      { title: "scikit-learn — Decomposition (PCA)", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca", kind: "docs" },
    ],
  },
  {
    id: "eval",
    rootId: "core",
    title: "Model Evaluation & Metrics",
    description: "Precision, recall, ROC curves, and cross-validation — knowing whether a model is actually good.",
    resources: [
      { title: "scikit-learn — Model Evaluation", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", kind: "docs" },
    ],
  },
  {
    id: "feateng",
    rootId: "core",
    title: "Feature Engineering",
    description: "Turning raw data into inputs a model can actually learn from.",
    resources: [
      { title: "Kaggle Learn — Feature Engineering", url: "https://www.kaggle.com/learn/feature-engineering", kind: "course" },
    ],
  },
  {
    id: "ensemble",
    rootId: "core",
    title: "Ensemble Methods",
    description: "Combining many weak models into a strong one — random forests, boosting, and stacking.",
    resources: [
      { title: "scikit-learn — Ensemble Methods", url: "https://scikit-learn.org/stable/modules/ensemble.html", kind: "docs" },
      { title: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/", kind: "docs" },
    ],
  },

  // ---- Deep Learning ----
  {
    id: "nn-fundamentals",
    rootId: "deep",
    title: "Neural Network Fundamentals",
    description: "Neurons, layers, and activation functions — the building blocks of every deep model.",
    resources: [
      { title: "3Blue1Brown — Neural Networks", url: "https://www.3blue1brown.com/topics/neural-networks", kind: "video" },
    ],
  },
  {
    id: "backprop",
    rootId: "deep",
    title: "Backpropagation & Optimization",
    description: "How networks assign credit and blame across layers to actually learn.",
    resources: [
      { title: "CS231n — Optimization Notes", url: "https://cs231n.github.io/optimization-2/", kind: "article" },
    ],
  },
  {
    id: "cnn",
    rootId: "deep",
    title: "Convolutional Neural Networks",
    description: "The architecture behind most computer vision — convolutions, pooling, and feature maps.",
    resources: [
      { title: "CS231n: CNNs for Visual Recognition", url: "https://cs231n.stanford.edu/", kind: "course" },
    ],
  },
  {
    id: "rnn",
    rootId: "deep",
    title: "Recurrent Networks & Sequence Models",
    description: "Modeling data with order — text, time series, and audio — via RNNs, GRUs, and LSTMs.",
    resources: [
      { title: "Sequence Models (DeepLearning.AI, Coursera)", url: "https://www.coursera.org/learn/nlp-sequence-models", kind: "course" },
    ],
  },
  {
    id: "transformers",
    rootId: "deep",
    title: "Transformers & Attention",
    description: "The attention mechanism that replaced recurrence and now powers most modern language and vision models.",
    resources: [
      { title: "The Illustrated Transformer — Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", kind: "article" },
    ],
  },
  {
    id: "transfer",
    rootId: "deep",
    title: "Transfer Learning",
    description: "Reusing a pretrained model's learned features instead of training from scratch.",
    resources: [
      { title: "PyTorch — Transfer Learning Tutorial", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html", kind: "docs" },
    ],
  },
  {
    id: "frameworks",
    rootId: "deep",
    title: "PyTorch & TensorFlow",
    description: "The two dominant deep learning frameworks for building, training, and deploying networks.",
    resources: [
      { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", kind: "docs" },
      { title: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials", kind: "docs" },
    ],
  },

  // ---- Applied & Specializations ----
  {
    id: "nlp",
    rootId: "applied",
    title: "Natural Language Processing",
    description: "Teaching models to work with human language — from tokenization to modern language models.",
    resources: [
      { title: "Hugging Face — NLP Course", url: "https://huggingface.co/learn/nlp-course", kind: "course" },
    ],
  },
  {
    id: "cv",
    rootId: "applied",
    title: "Computer Vision",
    description: "Detection, segmentation, and recognition — teaching models to interpret images and video.",
    resources: [
      { title: "PyTorch — Vision (torchvision) Docs", url: "https://pytorch.org/vision/stable/index.html", kind: "docs" },
    ],
  },
  {
    id: "rl",
    rootId: "applied",
    title: "Reinforcement Learning",
    description: "Learning by trial, error, and reward — the framework behind game-playing and control agents.",
    resources: [
      { title: "Spinning Up in Deep RL (OpenAI)", url: "https://spinningup.openai.com/", kind: "course" },
    ],
  },
  {
    id: "mlops",
    rootId: "applied",
    title: "MLOps & Deployment",
    description: "Getting a model out of a notebook and into production — pipelines, monitoring, and versioning.",
    resources: [
      { title: "Made With ML — MLOps Course", url: "https://madewithml.com/", kind: "course" },
    ],
  },
  {
    id: "llm",
    rootId: "applied",
    title: "Large Language Models",
    description: "How today's large-scale language models are built, trained, and fine-tuned, from first principles.",
    resources: [
      { title: "Andrej Karpathy — Neural Networks: Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html", kind: "video" },
    ],
  },
  {
    id: "ethics",
    rootId: "applied",
    title: "Responsible AI & Ethics",
    description: "Fairness, bias, and safety considerations for models that affect real people.",
    resources: [
      { title: "Google — Responsible AI Practices", url: "https://ai.google/responsibility/responsible-ai-practices/", kind: "article" },
    ],
  },
  {
    id: "interview",
    rootId: "applied",
    title: "ML System Design & Interviews",
    description: "Framing open-ended ML problems end-to-end — the format most ML job interviews actually test.",
    resources: [
      { title: "Chip Huyen — Machine Learning Interviews Book", url: "https://huyenchip.com/ml-interviews-book/", kind: "book" },
    ],
  },
];
