import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    isCustomer: false,
    stripeCustomerId: null,
    subscriptionId: null,
    subscriptionStatus: null,
    subscriptionEndDate: null,
    cancellationScheduledAt: null,
    pendingEmail: null,
    email: null,
    emailVerified: false,
    lastPaymentDate: null,
    lastPaymentAmount: null,
    lastPaymentStatus: null,
  }),
  getters: {
    getUser: (state) => state.user,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getLoading: (state) => state.loading,
    getIsCustomer: (state) => state.isCustomer,
    getStripeCustomerId: (state) => state.stripeCustomerId,
    getSubscriptionId: (state) => state.subscriptionId,
    getSubscriptionStatus: (state) => state.subscriptionStatus,
    getSubscriptionEndDate: (state) => state.subscriptionEndDate,
    getCancellationScheduledAt: (state) => state.cancellationScheduledAt,
    getPendingEmail: (state) => state.pendingEmail,
    getEmail: (state) => state.email,
    getEmailVerified: (state) => state.emailVerified,
    getLastPaymentDate: (state) => state.lastPaymentDate,
    getLastPaymentAmount: (state) => state.lastPaymentAmount,
    getLastPaymentStatus: (state) => state.lastPaymentStatus,
  },
  actions: {
    setUser(user) {
      this.user = user
      this.isAuthenticated = !!user
      if (user) {
        this.email = user.email || null
        this.emailVerified = user.emailVerified || false
        this.isCustomer = user.isCustomer || false
        this.stripeCustomerId = user.stripeCustomerId || null
        this.subscriptionId = user.subscriptionId || null
        this.subscriptionStatus = user.subscriptionStatus || null
        this.subscriptionEndDate = user.subscriptionEndDate || null
        this.cancellationScheduledAt = user.cancellationScheduledAt || null
        this.pendingEmail = user.pendingEmail || null
        this.lastPaymentDate = user.lastPaymentDate || null
        this.lastPaymentAmount = user.lastPaymentAmount || null
        this.lastPaymentStatus = user.lastPaymentStatus || null
      } else {
        this.clearUserData()
      }
    },
    setEmailVerified(value) {
      this.emailVerified = value;
    },
    clearUser() {
      this.user = null
      this.isAuthenticated = false
      this.clearUserData()
    },
    clearUserData() {
      this.isCustomer = false
      this.stripeCustomerId = null
      this.subscriptionId = null
      this.subscriptionStatus = null
      this.subscriptionEndDate = null
      this.cancellationScheduledAt = null
      this.email = null
      this.emailVerified = false
      this.pendingEmail = null
      this.lastPaymentDate = null
      this.lastPaymentAmount = null
      this.lastPaymentStatus = null
    },
    setLoading(status) {
      this.loading = status
    },
    updateUser(userData) {
      this.user = { ...this.user, ...userData }
      if (userData.email !== undefined) {
        this.email = userData.email
      }
      if (userData.emailVerified !== undefined) {
        this.emailVerified = userData.emailVerified
      }
      if (userData.isCustomer !== undefined) {
        this.isCustomer = userData.isCustomer
      }
      if (userData.stripeCustomerId !== undefined) {
        this.stripeCustomerId = userData.stripeCustomerId
      }
      if (userData.subscriptionId !== undefined) {
        this.subscriptionId = userData.subscriptionId
      }
      if (userData.subscriptionStatus !== undefined) {
        this.subscriptionStatus = userData.subscriptionStatus
      }
      if (userData.subscriptionEndDate !== undefined) {
        this.subscriptionEndDate = userData.subscriptionEndDate
      }
      if (userData.cancellationScheduledAt !== undefined) { 
        this.cancellationScheduledAt = userData.cancellationScheduledAt
      }
      if (userData.pendingEmail !== undefined) {
        this.pendingEmail = userData.pendingEmail
      }
      if (userData.lastPaymentDate !== undefined) {
        this.lastPaymentDate = userData.lastPaymentDate
      }
      if (userData.lastPaymentAmount !== undefined) {
        this.lastPaymentAmount = userData.lastPaymentAmount
      }
      if (userData.lastPaymentStatus !== undefined) {
        this.lastPaymentStatus = userData.lastPaymentStatus
      }
    },
    setSubscription(subscriptionData) {
      this.subscriptionId = subscriptionData.subscriptionId
      this.subscriptionStatus = subscriptionData.subscriptionStatus
      if (subscriptionData.subscriptionStatus === 'cancelling') {
        this.cancellationScheduledAt = subscriptionData.cancellationScheduledAt
      }
      this.subscriptionEndDate = subscriptionData.subscriptionEndDate
    },
    setPaymentInfo(paymentData) {
      this.lastPaymentDate = paymentData.lastPaymentDate
      this.lastPaymentAmount = paymentData.lastPaymentAmount
      this.lastPaymentStatus = paymentData.lastPaymentStatus
    },
  },
  persist: true,
});